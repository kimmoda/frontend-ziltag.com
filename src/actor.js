import {createAction} from 'redux-actions'
import {bind} from 'redux-effects'
import {fetch} from 'redux-effects-fetch'

import {RAILS_ADDR} from '../env'


export const current_user_fetched = createAction('CURRENT_USER_FETCHED')

export function fetch_current_user() {
  const api = `${RAILS_ADDR}/api/v1/me`
  return bind(fetch(api, {
    credentials: 'include'
  }), current_user_fetched)
}

export const activate_avatar_menu = createAction('ACTIVATE_AVATAR_MENU')
export const deactivate_avatar_menu = createAction('DEACTIVATE_AVATAR_MENU')

export const ziltag_map_fetched = createAction('ZILTAG_MAP_FETCHED')

export function fetch_ziltag_map(map_id) {
  const api = `${RAILS_ADDR}/api/v1/ziltag_maps/${map_id}`
  return bind(fetch(api, {
    credentials: 'include'
  }), ziltag_map_fetched)
}

export const ziltag_fetched = createAction('ZILTAG_FETCHED')

export function fetch_ziltag(ziltag_id) {
  const api = `${RAILS_ADDR}/api/v1/ziltags/${ziltag_id}`
  return bind(fetch(api, {
    credentials: 'include'
  }), ziltag_fetched)
}

export const hover_on_ziltag = createAction('HOVER_ON_ZILTAG')
export const unhover_on_ziltag = createAction('UNHOVER_ON_ZILTAG')

export const activate_ziltag_input = createAction('ACTIVATE_ZILTAG_INPUT')
export const deactivate_ziltag_input = createAction('DEACTIVATE_ZILTAG_INPUT')

export const ziltag_created = createAction('ZILTAG_CREATED')

export function create_ziltag(map_id, x, y, content) {
  const api = `${RAILS_ADDR}/api/v1/ziltags`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ziltag: {
        map_id, x, y, content
      }
    })
  }), ziltag_created)
}

export const activate_ziltag_editor = createAction('ACTIVATE_ZILTAG_EDITOR')
export const deactivate_ziltag_editor = createAction('DEACTIVATE_ZILTAG_EDITOR')

export const ziltag_edited = createAction('ZILTAG_EDITED')

export function edit_ziltag(ziltag_id, content) {
  const api = `${RAILS_ADDR}/api/v1/ziltags/${ziltag_id}`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ziltag: {
        content
      }
    })
  }), ziltag_edited)
}

export const activate_ziltag_comment_edit_mode = createAction('ACTIVATE_ZILTAG_COMMENT_EDIT_MODE')
export const deactivate_ziltag_comment_edit_mode = createAction('DEACTIVATE_ZILTAG_COMMENT_EDIT_MODE')

export const activate_ziltag_comment_delete_mode = createAction('ACTIVATE_ZILTAG_COMMENT_DELETE_MODE')
export const deactivate_ziltag_comment_delete_mode = createAction('DEACTIVATE_ZILTAG_COMMENT_DELETE_MODE')

export const ziltag_comment_edited = createAction('ZILTAG_COMMENT_EDITED')
export const ziltag_comment_deleted = createAction('ZILTAG_COMMENT_DELETED')

export function edit_ziltag_comment(comment_id, content) {
  const api = `${RAILS_ADDR}/api/v1/comments/${comment_id}`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment: {
        content
      }
    })
  }), ziltag_comment_edited)
}

export function delete_ziltag_comment(comment_id) {
  const api = `${RAILS_ADDR}/api/v1/comments/${comment_id}`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'delete'
  }), () => ziltag_comment_deleted(comment_id))
}

export const ziltag_input_changed = createAction('ZILTAG_INPUT_CHANGED')
export const ziltag_editor_changed = createAction('ZILTAG_EDITOR_CHANGED')
export const ziltag_comment_input_changed = createAction('ZILTAG_COMMENT_INPUT_CHANGED')
export const ziltag_comment_editor_changed = createAction('ZILTAG_COMMENT_EDITOR_CHANGED')

export const ziltag_comment_created = createAction('ZILTAG_COMMENT_CREATED')

export function create_ziltag_comment(ziltag_id, content) {
  const api = `${RAILS_ADDR}/api/v1/comments`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment: {
        ziltag_id, content
      }
    })
  }), ziltag_comment_created)
}

export const ziltag_input_sign_up = createAction('ZILTAG_INPUT_SIGN_UP')
export const ziltag_input_login = createAction('ZILTAG_INPUT_LOGIN')

export const current_user_logged_out = createAction('CURRENT_USER_LOGGED_OUT')

export function current_user_logout() {
  const api = `${RAILS_ADDR}/api/v1/sign_out`
  return bind(fetch(api, {
    credentials: 'include'
  }), current_user_logged_out)
}

export const current_user_logged_in = createAction('CURRENT_USER_LOGGED_IN')

export function current_user_login(user, password) {
  const api = `${RAILS_ADDR}/api/v1/sign_in`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        login: user,
        password
      }
    })
  }), current_user_logged_in)
}

export const current_user_signed_up = createAction('CURRENT_USER_SIGNED_UP')

export function current_user_sign_up(name, email) {
  const api = `${RAILS_ADDR}/api/v1/users`
  return bind(fetch(api, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: name,
        email
      }
    })
  }), current_user_signed_up)
}

export const login_form_user_changed = createAction('LOGIN_FORM_USER_CHANGED')
export const login_form_password_changed = createAction('LOGIN_FORM_PASSWORD_CHANGED')

export const sign_up_form_name_changed = createAction('SIGN_UP_FORM_NAME_CHANGED')
export const sign_up_form_email_changed = createAction('SIGN_UP_FORM_EMAIL_CHANGED')
