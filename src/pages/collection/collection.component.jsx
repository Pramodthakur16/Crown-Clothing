import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = () => {
    const collection = useSelector(state => state.shop.collections)
    const params = useParams();
    
    const category = params.collectionId;
    console.log(params, category, collection);
    
    const filteredData = collection.filter(item => item.routeName === category)
    console.log(filteredData, 'collection');
    const { title, items = [] } = filteredData[0];

    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);