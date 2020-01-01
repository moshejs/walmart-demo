const imgBadgeStyle = {
  fontSize: '14px',
  // fontWeight: 'bold',
  fontFamily: 'BogleWeb-Bold',
  width: '55px',
  height: '55px',
  textAlign: 'center',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  marginTop: '-60px'
}

const newItemStyle = {
  ...imgBadgeStyle,
  color: 'black',
  backgroundColor: '#E2F3F7'
}

const exclusiveItemStyle = {
  ...imgBadgeStyle,
  color: 'white',
  backgroundColor: '#006697',
  fontSize: '12px',
  fontFamily: 'BogleWeb-Regular'
}

const topRatedStyle = {
  ...imgBadgeStyle,
  color: '#FFFFFF',
  backgroundColor: '#63327E'
}

const badgeText = {
  NEW_ITEM: 'New!',
  EXCLUSIVE_ITEM: 'Only @ Walmart',
  TOP_RATED: 'Top Rated'
}

const badgeStyle = {
  NEW_ITEM: newItemStyle,
  EXCLUSIVE_ITEM: exclusiveItemStyle,
  TOP_RATED: topRatedStyle
}

const ImgBadge = props => (
  <div style={badgeStyle[props.itemType]}>{badgeText[props.itemType]}</div>
)

export default ImgBadge
