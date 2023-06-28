import { View, Text ,Image,ImageBackground,StyleSheet,TouchableOpacity, Dimensions} from 'react-native'
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
import { Padding } from '../GlobalStyles'
import FrameComponent from '../components/FrameComponent'

const Product_Details = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / scrollViewWidth);
    setCurrentPage(page);
  };

  const scrollViewRef = React.useRef();
  const scrollViewWidth =Dimensions.get('window').width; // Width of each item in the scroll view
  const renderDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {[...Array(2).keys()].map((index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentPage === index && styles.activeDot]}
            onPress={() => {
              setCurrentPage(index);
              scrollViewRef.current.scrollTo({ x: index * scrollViewWidth, animated: true });
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <ImageBackground source={require('../assets/Background.png')} style={{ width: '100%', height: '100%' }}>
      
      <TopbarContainer/>
      <ScrollView>
       
        <View style={styles.container}>
      <ScrollView 
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}
        scrollEventThrottle={16}
      >
        {/* Content for each page */}
        <View style={styles.page}>
        <Image source={require('../assets/bigimg.png')}  style={styles.imgg}></Image>
        </View>
        <View style={styles.page}>
        <Image source={require('../assets/bigimg.png')}  style={styles.imgg}></Image>
        </View>
       
      </ScrollView>
      {renderDots()}
      
<ProductImageContainer/>
    </View>
        <PDPActionsContainer/>
        <View style={styles.container}>
      <ScrollView
        horizontal
      >
        {/* Content for each page */}
        <View style={styles.page1}>
        <Image source={require('../assets/vid.png')}  style={styles.imgg}></Image>
        </View>
        <View style={styles.page1}>
        <Image source={require('../assets/vid.png')}  style={styles.imgg}></Image>
        </View>
        <View style={styles.page1}>
        <Image source={require('../assets/vid.png')}  style={styles.imgg}></Image>
        </View>
        <View style={styles.page1}>
        <Image source={require('../assets/vid.png')}  style={styles.imgg}></Image>
        </View>
      </ScrollView>
      
      <FrameComponent/>
    </View>
    <Text style={{fontSize:30,color:'black',padding:30}}>you may also like</Text>
<ProductGridCard/>



      </ScrollView>
      <Image source={require('../assets/Bottom.png')} style={{ height: '10%', width: '100%' }}></Image>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgg:{
    width:'100%',
    height:300,
    resizeMode:'contain',
  },
  page: {
    width: 350,
    borderWidth:1,
    backgroundColor:'#e9e9e9',
    borderRadius:10,
    padding:10,
    paddingHorizontal:20,
    marginHorizontal:10,
    // Other styles for your page content
  },
  page1: {width:200,paddingBottom:50
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
});
export default Product_Details