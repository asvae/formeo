const isSite = window.location.href.indexOf('draggable.github.io') !== -1
const container = document.querySelector('.build-form')
const renderContainer = document.querySelector('.render-form')

const external = {
  user: {
    isAuthenticated: true,
    userName: 'Kevin',
  },
}

const hasParentWithClass = (element, classname) => {
  if (element.className && element.className.split(' ')
    .indexOf(classname) >= 0) {
    return true
  }
  return element.parentNode ? hasParentWithClass(element.parentNode, classname) : false
}

const getNonInitializedHtmlEditors =
  () => {
    const allHtmlEditors = Array.from(document.querySelectorAll('.html-editor'))
    return allHtmlEditors
      .filter(
        htmlEditor => !htmlEditor.parentNode.querySelector('.fr-box'),
      )
  }

const checkFroalaEditorInterval = setInterval(() => {
  getNonInitializedHtmlEditors().forEach(htmlEditor => {
    console.log('initiaizing froala editor', htmlEditor.getAttribute('value'))
    htmlEditor.innerHTML = htmlEditor.getAttribute('value')
    $(htmlEditor).froalaEditor({ toolbarInline: false })
    // $(htmlEditor).froalaEditor('html.set', htmlEditor.getAttribute('value'))
  })
}, 1000)

const formeoOpts = {
  editorContainer: '.build-form',
  i18n: {
    location: '../assets/lang',
  },
  actions: {
    save: (value) => {
      console.log('value', value)
      console.log('JSON.stringify(value)', JSON.stringify(value))
    },
  },
  external,
  // allowEdit: false,
  controls: {
    sortable: false,
    groupOrder: ['common', 'html'],
    disable: {
      // elements: ['button'],
    },
    elements: [
      {
        tag: 'textarea',
        config: {
          label: 'HTML Editor', // TODO Add translation
        },
        meta: {
          group: 'common',
          icon: 'upload',
          id: 'html-editor',
        },
        attrs: {
          required: false,
          className: 'html-editor',
          // style: 'display: none;'
        },
      },
      {
        tag: 'input',
        config: {
          label: 'Email',
          disabledAttrs: ['type'],
          lockedAttrs: ['required', 'className'],
        },
        meta: {
          group: 'common',
          id: 'email',
          icon: '@',
        },
        attrs: {
          className: 'custom-email',
          type: 'email',
          required: true,
        },
      },
    ],
  },
  config: {
    fields: {
      checkbox: {
        actionButtons: {
          buttons: ['edit'],
        },
      },
      'a33bcc32-c54c-46ed-9609-7cdb5b3dc511': {
        events: {
          onRender: element => {
            setTimeout(() => {
              formeo.Components.fields.get(element.id).toggleEdit(true)
              element.querySelector('.next-group').click()
            }, 333)
          },
        },
        panels: {
          attrs: {
            hideDisabled: true,
          },
          disabled: [
            // 'conditions'
          ],
        },
      },
    },
  },
  sessionStorage: false,
  editPanelOrder: ['attrs', 'options'],
}

const formeo = new window.FormeoEditor(
  formeoOpts,
  {
    'id': '79ccb528-61ed-4dcb-8687-5b9720fb13cf',
    'stages': {
      '118ce2f3-d4e4-4ce5-8951-4e56a214e565': {
        'children': ['0572d6fa-e854-4e64-a7bd-2cbff3f60a00'],
        'id': '118ce2f3-d4e4-4ce5-8951-4e56a214e565',
      },
    },
    'rows': {
      '0572d6fa-e854-4e64-a7bd-2cbff3f60a00': {
        'config': {
          'fieldset': false,
          'legend': '',
          'inputGroup': false,
        },
        'children': ['61f528e7-a35f-47ad-8aba-9949ed98a02b'],
        'className': ['f-row'],
        'id': '0572d6fa-e854-4e64-a7bd-2cbff3f60a00',
      },
    },
    'columns': {
      '61f528e7-a35f-47ad-8aba-9949ed98a02b': {
        'config': { 'width': '100%' },
        'children': ['43723499-41e7-4014-9291-b5195feef450', '3f72d22d-5578-46df-b4ca-d63c2f39fc60'],
        'className': 'f-column',
        'id': '61f528e7-a35f-47ad-8aba-9949ed98a02b',
      },
    },
    'fields': {
      '43723499-41e7-4014-9291-b5195feef450': {
        'conditions': [{
          'if': [{
            'source': '',
            'sourceProperty': 'value',
            'comparison': 'equals',
            'target': '',
            'targetProperty': 'value',
          }],
          'then': [{
            'target': '',
            'targetProperty': 'value',
            'assignment': 'equals',
            'value': '',
          }],
        }],
        'tag': 'textarea',
        'config': { 'label': 'HTML Editor' },
        'meta': { 'group': 'common', 'icon': 'upload', 'id': 'html-editor' },
        'attrs': {
          'required': false,
          'className': 'html-editor',
          'value': '<p>S<strong>ome te</strong>xt&nbsp;</p><p>So<strong>me te</strong>xt</p><p>S<strong>ome te</strong>xt more<br></p>',
        },
        'id': '43723499-41e7-4014-9291-b5195feef450',
      },
      '39a6ffa9-31ad-4e4e-8d65-9704df9e4d2e': {
        'conditions': [{
          'if': [{
            'source': '',
            'sourceProperty': 'value',
            'comparison': 'equals',
            'target': '',
            'targetProperty': 'value',
          }],
          'then': [{
            'target': '',
            'targetProperty': 'value',
            'assignment': 'equals',
            'value': '',
          }],
        }],
        'tag': 'textarea',
        'config': { 'label': 'HTML Editor' },
        'meta': { 'group': 'common', 'icon': 'upload', 'id': 'html-editor' },
        'attrs': { 'required': false, 'className': 'html-editor' },
        'id': '39a6ffa9-31ad-4e4e-8d65-9704df9e4d2e',
      },
      '3f72d22d-5578-46df-b4ca-d63c2f39fc60': {
        'conditions': [{
          'if': [{
            'source': '',
            'sourceProperty': 'value',
            'comparison': 'equals',
            'target': '',
            'targetProperty': 'value',
          }],
          'then': [{
            'target': '',
            'targetProperty': 'value',
            'assignment': 'equals',
            'value': '',
          }],
        }],
        'tag': 'textarea',
        'config': { 'label': 'HTML Editor' },
        'meta': { 'group': 'common', 'icon': 'upload', 'id': 'html-editor' },
        'attrs': {
          'required': false,
          'className': 'html-editor',
          'value': '<p>Let\'s add some more text</p>',
        },
        'id': '3f72d22d-5578-46df-b4ca-d63c2f39fc60',
      },
    },
  },
)
