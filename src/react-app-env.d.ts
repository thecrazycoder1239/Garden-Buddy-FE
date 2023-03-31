/// <reference types="react-scripts" />

interface GrowStuffCrop {
  //from '/crops'
  _id: string;
  id: number;
  name: string;
  slug: string;
  scientific_name: string[];
  description: string;
  thumbnail_url: string;

  // from '/crops/:id'
  median_lifespan: number;
  median_days_to_first_harvest: number;
  median_days_to_last_harvest: number;
  perennial: boolean;

  openfarm_data: {
    attributes: {
      description: string;
      main_image_path: string;
      sun_requirements: string;
      sowing_method: string;
      height: number;
      spread: number;
    };
  };
}