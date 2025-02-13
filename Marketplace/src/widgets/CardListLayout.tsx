import { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode,
	title: string,
	subtitle?: string,
	timer?: ReactNode,
	controls?: ReactNode,
	showMore?: ReactNode,
	subtitleStyle?:string,
	titleStyle?:string,
}

const CardListLayout: FC<Props> = ({children, titleStyle, subtitleStyle="text-4xl", title, subtitle, timer=null, controls=null, showMore=null}) => {

    return (
        <div className='flex flex-col gap-14'>
            <div className="flex flex-col gap-6">
                <div className='relative'>
                    <h1 className={`flex items-center gap-4 before:content-[''] before:rounded-sm before:block before:h-10 before:w-5 before:bg-[#DB4444] text-[#DB4444] ${titleStyle}`}>{title}</h1>
                    {!subtitle && <div className='absolute right-0 top-0'>{controls}</div>}
                </div>
                {
                    subtitle &&
                      <div className='flex gap-20 items-center relative'>
                          <div className='flex gap-3 items-center'>
                              <h1 className={subtitleStyle}>{subtitle}</h1>
                          </div>
                          {timer}
                          <div className='absolute right-0'>{controls}</div>
                      </div>
                }
            </div>
            {children}
            {showMore}
        </div>
    )
}

export default CardListLayout
