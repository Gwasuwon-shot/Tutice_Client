interface NoclassBannerProp {
  bannerTitle: string;
}

export default function NoclassBanner(props: NoclassBannerProp) {
  const { bannerTitle } = props;

  return <div>NoclassBanner</div>;
}
