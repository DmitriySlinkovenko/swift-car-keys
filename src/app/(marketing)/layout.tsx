import { ReactNode } from 'react'

const MarketingLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='selection:bg-[hsl(320,65%,52%,20%)]'>
      <NavBar />
      qweqweqweseqwe
      {children}
    </div>
  )
}

export default MarketingLayout