import PropTypes from 'prop-types';
import nophoto from "../../../assets/nophoto.png"
import CardsWrapper from '../../../shared/UI/CardsWrapper';
import { NavLink } from 'react-router-dom';
const SearchProductLayout = ({img=nophoto, data, id}) => {
	SearchProductLayout.propTypes={
		data: PropTypes.object,
		img: PropTypes.string,
		id: PropTypes.number,
	}
  return (
	<NavLink id={id} to={`products/${data.id}`} className="focus:bg-[#e0e0e0] focus:outline-none hover:bg-[#e0e0e0]">
		<CardsWrapper variant="micro" size="sm" className="gap-x-2 p-2 bg-inherit">
			<img src={img} alt="" />
			<span className="truncate">
				{data.title}
			</span>
			{data.discount ?
			<span className="text-lg font-bold text-[#DB4444]">${data.currentPrice}</span>
			:
			<span className="text-lg font-bold">${data.currentPrice}</span>
			}
		</CardsWrapper>
	</NavLink>
  )
}

export default SearchProductLayout
