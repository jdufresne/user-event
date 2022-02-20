import {setup} from '#testHelpers'

test.each(['Backspace', 'Delete', 'End', 'Home', 'PageUp', 'PageDown'])(
  'implement no keydown behavior for [%s] outside of editable context',
  async code => {
    const {element, getEvents, clearEventCalls, user} = setup(
      `<div tabIndex="1"></div>`,
    )
    element.focus()
    clearEventCalls()

    await user.keyboard(`[${code}>]`)

    expect(getEvents().map(e => e.type)).toEqual(['keydown'])
  },
)
