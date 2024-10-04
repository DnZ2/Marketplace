import SearchProductLayout from "../../../../../../entities/Product/UI/SearchProductLayout"
import PropTypes from 'prop-types';

const HeaderSearchContent = ({products}) => {
	HeaderSearchContent.propTypes={
		products: PropTypes.array,
	}
	return (
	<div className="absolute top-[105%] bg-[#F5F5F5]">
	{
		products.map((item, index)=>
		<SearchProductLayout id={index} key={item.id} data={item}/>
		)
	}
	</div>
  )
}

export default HeaderSearchContent
