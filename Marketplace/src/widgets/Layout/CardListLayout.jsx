import PropTypes from 'prop-types';

export const RedBlock = <div className='bg-[#DB4444] h-10 w-5 rounded-sm'></div>

const CardListLayout = ({children,titleBlock=RedBlock, subtitleBlock=null, subtitleStyle="text-4xl", title, subtitle, timer=null, controls=null, showMore=null}) => {
	CardListLayout.propTypes={
		children: PropTypes.node,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		timer: PropTypes.node,
		controls: PropTypes.node,
		showMore: PropTypes.node,
		subtitleStyle: PropTypes.string,
		titleBlock: PropTypes.node,
		subtitleBlock: PropTypes.node,
	}
  return (
	<div className='flex flex-col gap-14'>
	<div className="flex flex-col gap-6">
		<div className='flex gap-3 items-center'>
			{titleBlock}
			<h1 className="text-[#DB4444]">{title}</h1>
		</div>
		<div className='flex gap-20 items-center relative'>
			<div className='flex gap-3 items-center'>
			{subtitleBlock}
			<h2 className={subtitleStyle}>{subtitle}</h2>
			</div>
			{timer}
			<div className='absolute right-0'>{controls}</div>
		</div>
	</div>
	{children}
	{showMore}
	</div>
  )
}

export default CardListLayout
