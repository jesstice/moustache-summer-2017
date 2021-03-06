import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native';

import ProductCard from '../../components/ProductCard/';
import ThreeIconTabs from '../../components/ThreeIconTabs/';
import ActionButton from '../../components/ActionButton/';
import { styles } from './styles';

const Product = ({ item }) => (
    <ScrollView style={styles.container}>
        <ProductCard data={item} heartStyle={styles.heartstyle}/>
        <ActionButton text={'Add to Favourites'} />
        <ThreeIconTabs data={item} />
    </ScrollView>
)

Product.propTypes = {
    item: PropTypes.shape({
        __typename: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    })
}

export default Product;
