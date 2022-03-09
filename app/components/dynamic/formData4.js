export const formData ={ 
  version: "2022.11.01", 
  data: [
  {
    component: "section",
    label: "1",
    _uid: "0c946643-5a83-4545-baea-055b27b51e8a",

    fields: [
      {
        component: "field_group",
        label: "Shipper",
        _uid: "eb169f76-4cd9-4513-b673-87c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
          },
          {
            component: "text",
            label: "CONTACT",
            type: "text",
            _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
          },
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b93"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b181"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "2",
    _uid: "0c946643-5a83-4545-baea-055b27b5e8a",

    fields: [
      {
        component: "field_group",
        label: "EXPORTER - IF OTHER THAN SHIPPER",
        _uid: "eb169f76-4cd9-4513-b673-7c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          },
          {
            component: "text",
            label: "CONTACT",
            type: "text",
            _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
          },
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-20dfc0b6b93"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff363880a7-4427-b07b-4c1be1c6b181"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "3",
    _uid: "2c946643-5a83-4545-baea-055b27b5e8a",

    fields: [
      {
        component: "field_group",
        label: "OTHER REF. NOS.",
        _uid: "eb169f76-4cd9-4513-b673-7c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "4",
    _uid: "2c946643-5a83-4545-baea-05b27b5e8a",
    fields: [
      {
        component: "field_group",
        label: "CONSIGNEE / SHIP TO PARTY NAME REF. NOS.",
        _uid: "eb169f76-4cd9-4513-b673-75c7d27e02",
        fields: [   
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
          },
        ],
   
      } 
    ]
  },
  {
    component: "section",
    label: "5",
    _uid: "3a30803f-135f-442-ab6e-d44d7d7a5164",
    
    component: "fields",
    label: "4",
    _uid: "eb169f76-4cd9-4513-b673-75c7d27e02",
    
    fields: [
      
      {
        component: "text",
        label: "PHONE",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
      },
      {
        component: "text",
        label: "ADDRESS",
        type: "text",
        _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
      },
      {
        component: "options",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "None U.S. cleanrance",
            value: "one"
          },
          {
            component: "option",
            label: "U.S. cleanrance",
            value: "two"
          }
        ]
      },
      {
        component: "text",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER",
        type: "text",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      },
      {
        component: "text",
        label: "4b. DUNS Number & Email Address **required for Food Imports Into the USA**",
        type: "text",
        _uid: "bd90f44a-d479-49ae-d66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      }
    ]
  },
  {
    component: "section",
    label: "5",
    _uid: "3a30803f-135f-442-ab6e-d44d7d7a5164",
    fields: [
      {
        component: "text",
        label: "PHONE",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
      },
      {
        component: "text",
        label: "ADDRESS",
        type: "text",
        _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
      },
      {
        component: "options",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "None U.S. cleanrance",
            value: "one"
          },
          {
            component: "option",
            label: "U.S. cleanrance",
            value: "two"
          }
        ]
      },
      {
        component: "text",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER",
        type: "text",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      }
    ]
  },
  // {
  //   component: "section",
  //   label: "6",
  //   _uid: "1dd4ec7c-fb53-47f4-af1b-1ab8f805b888",
  //   conditional: {
  //     value: "two",
  //     field:
  //       "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
  //   },
  //   fields: [
  //     {
  //       component: "options",
  //       label: "Something to toggle",
  //       type: "radio",
  //       _uid: "3ca9237d-e225-4950-a298-f81ce996cb85",
  //       options: [
  //         {
  //           component: "option",
  //           label: "Option 1",
  //           value: "one"
  //         },
  //         { component: "option", label: "Option 2", value: "two" }
  //       ]
  //     },
  //     {
  //       component: "field_group",
  //       label: "Name",
  //       _uid: "b8406cb5-ff0d-4a83-a8f8-99740b6d91f7",
  //       fields: [
  //         {
  //           component: "text",
  //           label: "First Name",
  //           type: "text",
  //           _uid: "c6e065e1-dbcb-44ea-831f-ac3af889e964"
  //         },
  //         {
  //           component: "text",
  //           label: "Last Name",
  //           type: "text",
  //           _uid: "e279ba9c-3c9b-4df8-b267-d14b3c2adcdd"
  //         }
  //       ]
  //     },
  //     {
  //       component: "text",
  //       label: "Email",
  //       type: "email",
  //       _uid: "a95208a0-7673-48a8-b704-2fb408fa6eec"
  //     },
  //     {
  //       component: "text",
  //       label: "Phone",
  //       type: "text",
  //       _uid: "8dde5083-0619-42d6-8fc7-0563c35d03ad"
  //     }
  //   ]
  // },
  // {
  //   component: "section",
  //   label: "7",
  //   _uid: "0c946643-5a83-4545-baea-065b27b51e8a",
  //   fields: [
  //     {
  //       component: "text",
  //       label: "Final Comment",
  //       type: "text",
  //       _uid: "f61231e8-565e-43d0-9c14-7d7f220c6020"
  //     }
  //   ]
  // }
]
}
