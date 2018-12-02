import Control from '../control'

const hasSomeParentTheClass = (element, classname) => {
  if (element.className && element.className.split(' ')
    .indexOf(classname) >= 0) {
    return true
  }
  return element.parentNode ? hasSomeParentTheClass(element.parentNode, classname) : false
}

class WysiwygControl extends Control {
  isInitialized = false

  constructor () {
    let self
    const htmlEditorConfig = {
      tag: 'textarea',
      config: {
        label: 'HTML Editor', // TODO Add translation
      },
      action: {
        onRender: (element) => {
          const isBuildFormComponent = hasSomeParentTheClass(element, 'formeo-editor')
          const isRenderFormComponent = hasSomeParentTheClass(element, 'formeo-render')

          if (isBuildFormComponent) {
            $(element).froalaEditor()
            console.log('isBuildFormComponent')
          }
          if (isRenderFormComponent) {
            console.log('isRenderFormComponent')
          }

          if (self.isInitialized) {
            // Froala need to be initialized only once.
            // But this event triggers multiple times for some reason.
            return
          }

          console.log('self', self)
          console.log('element', element)
          self.isInitialized = true
        },
      },
      meta: {
        group: 'common',
        icon: 'upload',
        id: 'html-editor',
      },
      attrs: {
        required: false,
      },
    }

    super(htmlEditorConfig)
    self = this
  }

  parsedHtml = html => {
    const escapeElement = document.createElement('div')
    escapeElement.innerHTML = html
    return escapeElement.textContent
  }
}

export default WysiwygControl
