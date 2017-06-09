var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];
var formContainer = document.querySelector(".form-Container");


//let doc = document.querySelector("form")
// let obj = formData[0];
// let text = 'input type =""' + obj.type + "" id=""
for (var i = 0; i < formData.length; i++) {
  let form = document.querySelector("form")
  let obj = formData[i];
  let text;
  if (obj.options.length === 0) {
    text = '<input class="look-pretty" type="text' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  } else {
     text = '<select class="select" type="select" id="size"><option value="EN" selected>English</option><option value="FR">French</option><option value="SP">Spanish</option><option value="CH">Chinese</option><option value="JP">Japanese</option></select>' 
  }
  form.insertAdjacentHTML("beforeend", text);
}
