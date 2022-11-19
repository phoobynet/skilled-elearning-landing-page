import { PropsWithChildren, useMemo } from 'react'

type Props = {
  kind: 'primary' | 'secondary' | 'tertiary'
}

export default function Button({ children, kind }: PropsWithChildren<Props>) {
  const className = useMemo(() => `btn btn-${kind}`, [kind])

  return <button className={className}>{children}</button>
}
