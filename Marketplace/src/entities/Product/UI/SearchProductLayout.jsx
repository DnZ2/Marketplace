import PropTypes from 'prop-types';
import nophoto from "../../../assets/nophoto.png"

const SearchProductLayout = ({img=nophoto, data}) => {
	SearchProductLayout.propTypes={
		data: PropTypes.object,
		img: PropTypes.string,
	}
  return (
	<div className="w-full grid pr-4 grid-cols-[10%_1fr_15%_7%] items-center gap-x-2">
		<img src={img} alt="" />
		<div className="flex gap-2 items-center">
			<span>{data.title}</span>
		</div>
		<span className="text-lg font-bold">${data.price}</span>
	</div>
  )
}

export default SearchProductLayout
