/**
 * import and init global mixins
 */

import Vue from 'vue'

import currentUser from '../mixins/currentUser'
import jumpTo from '../mixins/jumpTo'
import formatDateTime from '../mixins/formatDateTime'
import image from '../mixins/image'

Vue.mixin(currentUser)
Vue.mixin(jumpTo)
Vue.mixin(formatDateTime)
Vue.mixin(image)
