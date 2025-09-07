import React from 'react'

import { PropsWithChildren } from 'react'
export default function Container({ children }: PropsWithChildren) {
return <div className="container-narrow">{children}</div>
}