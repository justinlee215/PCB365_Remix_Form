import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import Field from './Field'
import FieldGroup from './FieldGroup'
import Option from './Option'

const fieldMeetsCondition = (values) => (field) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split("_");
    const fieldId = segments[segments.length - 1];
    return values[fieldId] === field.conditional.value;
  }
  return true;
};

const Form = ({ formData }) => {

  const { version, data } = formData

  const [section, setSection] = useState(0);

  const [currentSectionData, setCurrentSectionData] = useState(data[section]);

  const [values, setValues] = useState({});

  useEffect(() => {
    const upcomingSectionData = data[section];
    setCurrentSectionData(upcomingSectionData);
    setValues((currentValues) => {
      const newValues = upcomingSectionData.fields.reduce((obj, field) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField._uid] = "";
          }
        } else {
          obj[field._uid] = "";
        }

        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [section, data]);


  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    setCurrentSectionData((currentSectionData) => {
      return Object.assign({}, currentSectionData);
    });
  };

  const navigateSections = (direction) => () => {
    const findNextSection = (section) => {
      const upcomingSectionData = data[section];
      if (upcomingSectionData.conditional && upcomingSectionData.conditional.field) {

        const segments = upcomingSectionData.conditional.field.split("_");
        const fieldId = segments[segments.length - 1];

        const fieldToMatchValue = values[fieldId];

        if (fieldToMatchValue !== upcomingSectionData.conditional.value) {
          return findNextSection(direction === "next" ? section + 1 : section - 1);
        }
      }
      return section;
    };

    setSection(findNextSection(direction === "next" ? section + 1 : section - 1));
  };

  const nextSection = navigateSections("next");
  const prevSection = navigateSections("prev");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("event: ", e)
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{currentSectionData.label}</h2>
      {currentSectionData.fields
        .filter(fieldMeetsCondition(values))
        .map((field) => {
          switch (field.component) {
            case "field_group":
              return (
                <FieldGroup
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  // should probably only slice out the required values, but ¯\_(ツ)_/¯
                  values={values}
                />
              );
            case "options":
              return (
                <Option
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
            default:
              return (
                <Field
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
          }
        })}
      {section > 0 && <Button onClick={prevSection}>Back</Button>}&nbsp;
      {section < data.length - 1 && <Button onClick={nextSection}>Next</Button>}
      <hr />
      <Button onClick={() => console.log(values)}>Save/Submit</Button>
    </form>
  );
};

export default Form;
