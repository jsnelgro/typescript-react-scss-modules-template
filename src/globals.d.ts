// solution to styleName err:
// ref: https://github.com/gajus/react-css-modules/issues/147#issuecomment-343752119
import React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    styleName?: string
  }
}