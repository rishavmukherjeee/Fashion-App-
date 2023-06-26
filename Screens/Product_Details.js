import { View, Text } from 'react-native'
import React from 'react'
import BuyContainer from '../components/BuyContainer'
import { ScrollView } from 'react-native-gesture-handler'
import ContainerView from '../components/ContainerView'
import DiscoverMatchesContainer from '../components/DiscoverMatchesContainer'
import ExpertReviewsContainer from '../components/ExpertReviewsContainer'
import PDPActionsContainer from '../components/PDPActionsContainer'
import ProductCardContainer from '../components/ProductCardContainer'
import ProductCardsContainer from '../components/ProductCardsContainer'
import ProductGridCard from '../components/ProductGridCard'
import ProductGridViewContainer from '../components/ProductGridViewContainer'
import ProductImageContainer from '../components/ProductImageContainer'
import ProductScrollView from '../components/ProductScrollView'
import SkincareMatchesContainer from '../components/SkincareMatchesContainer'
import StatusContainer from '../components/StatusContainer'
import TopbarContainer from '../components/TopbarContainer'
import ViewContainer from '../components/ViewContainer'

const Product_Details = () => {
  return (
    <View>
      <ScrollView>
        <ContainerView></ContainerView>
        <DiscoverMatchesContainer/><PDPActionsContainer/>
<ProductCardContainer/>
<ProductCardsContainer/>
<ProductGridCard/>
<ProductGridViewContainer/>
<ProductImageContainer/>
<ProductScrollView/>
<SkincareMatchesContainer/>
<StatusContainer/>
<TopbarContainer/>
<ViewContainer/>
      <BuyContainer/>
      </ScrollView>
      
    </View>
  )
}

export default Product_Details