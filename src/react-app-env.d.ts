/// <reference types="react-scripts" />
type Attributes = {
    description: string,
    main_image_path: string,
    sun_requirements: string
}

interface GrowStuffCrop {
  //from '/crops'
  _id: string;
  id: number;
  name: string;
  slug: string;
  scientific_name: string[];
  description: string;
  thumbnail_url: string;

  // from '/crops/_id'
  openfarm_data: {
    attributes: {
      description: string;
      main_image_path: string;
      sun_requirements: string;
    };
  };
}