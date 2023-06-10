import React from 'react';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';

const UserPayment = ({price}) => {
    return (
        <div>
            <SectionsTitle header={'payment checkout'} title={'time to book'} subtitle={'your place'}></SectionsTitle>
            <h1>Your Current Due: ${}</h1>
        </div>
    );
};

export default UserPayment;