import Header from 'library/components/Header/Header';
import React from 'react';

const WithHeader = (WrappedComponent: any) => {
	const WithHead = () => (
		<>
			<Header />

			<WrappedComponent />
			;
		</>
	);

	const WithHeaderWrap = WithHead;

	return WithHeaderWrap;
};

export default WithHeader;
