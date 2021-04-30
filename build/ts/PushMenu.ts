/**
 * --------------------------------------------
 * AdminLTE PushMenu.ts
 * License MIT
 * --------------------------------------------
 */

import {
  windowReady
} from './util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const CLASS_NAME_SIDEBAR_COLLAPSE = 'sidebar-collapse'

const SELECTOR_DATA_TOGGLE = '[data-widget="pushmenu"]'

/**
 * Class Definition
 * ====================================================
 */

class PushMenu {
  toggle(): void {
    if (document.body.classList.contains(CLASS_NAME_SIDEBAR_COLLAPSE)) {
      document.body.classList.remove(CLASS_NAME_SIDEBAR_COLLAPSE)
    } else {
      document.body.classList.add(CLASS_NAME_SIDEBAR_COLLAPSE)
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const button = document.querySelectorAll(SELECTOR_DATA_TOGGLE)

windowReady(() => {
  for (const btn of button) {
    btn.addEventListener('click', () => {
      const data = new PushMenu()
      data.toggle()
    })
  }
})

export default PushMenu

//
