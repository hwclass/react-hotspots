const imageFormat = 'jpeg';

const sizes = {
  desktop: 1440,
  tablet: 720,
  phone: 480,
  highRes: {
    desktop: 2880,
    tablet: 1440,
    phone: 960,
  },
};

const imageProps = {
  queries: {
    desktop: '?fmt=${imageFormat}' + '&wid=${sizes.desktop}',
    tablet: '?fmt=${imageFormat}' + '&wid=${sizes.tablet}',
    phone: '?fmt=${imageFormat}' + '&wid=${sizes.phone}',
    highRes: {
      desktop: '?fmt=${imageFormat}' + '&wid=${sizes.highRes.desktop}',
      tablet: '?fmt=${imageFormat}' + '&wid=${sizes.highRes.tablet}',
      phone: '?fmt=${imageFormat}' + '&wid=${sizes.highRes.phone}',
    },
  },
};

export {
	imageFormat,
	sizes,
	imageProps,
};
