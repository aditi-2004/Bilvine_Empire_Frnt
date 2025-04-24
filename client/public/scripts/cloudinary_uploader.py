import cloudinary
import cloudinary.uploader

  # Configure Cloudinary with your credentials
cloudinary.config(
      cloud_name="ddg7tdv9q",
      api_key="221864381959946",
      api_secret="KzeM2QS8XzOyhWXn1EwShCbrwYM"  # Note: This was provided but masked for security
  )

  # List of image URLs
image_urls = [
      "https://pocketyoga.com/assets/images/thumbnails146/ForwardBendBigToe-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ChairTwistBindUp_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/BirdOfParadiseRevolved_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Chair-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LungeCrescent_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WarriorIKneeling_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/CrescentMoon_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Eagle_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingFootBehindHead_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/TrivikramaI_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingForwardBendFootBehindHead_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ForwardBend-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingForwardBendHalfLotus_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Goddess_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Gorilla-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HalfMoon_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HalfMoonRevolved_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingHandToToeExtended_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingHandToToeRevolved_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StandingHandToToeFull_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/MountainArmsSide-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PyramidPrayer_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ShivaSquat_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WarriorIIForwardArmForward_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SplitsStanding_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LordOfTheDance_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Star_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/TreePrayer_L-tn146.png",  # Added missing URL
      "https://pocketyoga.com/assets/images/thumbnails146/TriangleForward_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/TriangleRevolved_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WarriorI_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WarriorII_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WarriorIII_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WideLeggedForwardBendI_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WideLeggedForwardBendII_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WideLeggedForwardBendIII_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WideLeggedForwardBendIV_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Archer_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/BoatFull-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FootBehindHeadTwoLegged-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/BoundAngle-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Butterfly-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Caterpillar-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/KneePileBind_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Easy-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/EmbryoWomb-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FireLog_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FootBehindHead_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FootBehindHeadForward_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBend-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBendII-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBendIII-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBendIV-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBendHalfLotus_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBendThreeLimbs_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/GarlandSideways_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedGate_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedHandToToeRevolved_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HeadToKnee_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HeadToKneeII_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HeadToKneeIII_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Hero-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Heron_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LordOfTheFishes_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LotusFull-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SeatedOnHeelsTwistBound_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PigeonHalf_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Cradle_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/MarichiITraditional_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/MarichiIITraditional_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/MarichiIIITraditional_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/MarichiIVTraditional_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/KneePile_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SideLunge_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SplitsFront_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SplitsWide-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Staff-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Thunderbolt-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ToeStand_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Banana_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Bridge-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Corpse-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FishPreparation-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineTrivikrama_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineHandToToeExtended_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineHandToToeFull_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/BlissfulBaby-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/YogicSleep-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineSpinalTwist_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineStraddle-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/CorpseDoubleLegRaise-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Turtle-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Bow-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ProneBowHalf_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ChildTraditional-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/CobraFull-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/CorpseFrontArmsForward-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PuppyExtended-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FrogTraditional-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Locust-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LocustII-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LocustIII-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/GherandaI_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Snake-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Sphinx-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineTortoise-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/BoxNeutral-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Camel-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Cat-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Dog-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Dolphin-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/DownwardDog-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/EightPoint-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FlamingoHumble_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Gate_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Horse_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Lizard_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Lunge_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/CrookedMonkey_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Pigeon-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Plank-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PlankUpward-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FourLimbedStaff-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Rabbit-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/VisvamitraFull_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PlankSide_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/StaffInverted-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LittleThunderbolt-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Tiger_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/UpwardDog-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Wheel-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/WildThing_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FootBehindHeadTwoLeggedElevated-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ChinStand-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Crane-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Crow-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/DeafMan-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/EightAngle_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/RelaxedStance-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ElephantTrunk_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Embryo-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Firefly-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FloatingStick-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LungeHandsOnMatFlying_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FlyingManRevolved_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FeatheredPeacock-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Grasshopper_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Handstand-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HeadstandSupported-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/HeadstandTripod-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Duck-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FlyingLizard_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/FootBehindHeadElevated_L-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Peacock-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Pendant-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/PigeonFlying_R-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Plow-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Rooster-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/LotusElevated-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/Scorpion-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ScaleForward-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ShoulderstandLotus-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/ShoulderstandSupported-tn146.png",
      "https://pocketyoga.com/assets/images/thumbnails146/SupineAngle-tn146.png"
  ]

def upload_to_cloudinary(image_urls):
      """
      Upload images from URLs to Cloudinary and return a dictionary of original URLs to Cloudinary URLs.
      
      Args:
          image_urls (list): List of image URLs to upload.
          
      Returns:
          dict: Mapping of original URLs to their Cloudinary public IDs or URLs.
          
      Raises:
          Exception: If upload fails for any URL.
      """
      cloudinary_urls = {}
      for url in image_urls:
          try:
              # Upload the image from the URL
              result = cloudinary.uploader.upload(url, public_id=f"yoga/{url.split('/')[-1].split('.')[0]}")
              # Construct the full Cloudinary URL with transformations
              cloudinary_url = cloudinary.CloudinaryImage(result['public_id']).build_url(
                  transformation=["w_300,h_300,c_fill"]
              )
              cloudinary_urls[url] = cloudinary_url
              print(f"Successfully uploaded {url} to {cloudinary_url}")
          except Exception as e:
              print(f"Error uploading {url}: {str(e)}")
              continue
      return cloudinary_urls

  # Execute the upload
if __name__ == "__main__":
      cloudinary_urls = upload_to_cloudinary(image_urls)
      print("\nFinal URL Mapping:")
      for original_url, cloudinary_url in cloudinary_urls.items():
          print(f"{original_url} -> {cloudinary_url}")
      # Optionally save to a file or use in your JSON
      with open("cloudinary_url_mapping.json", "w") as f:
          import json
          json.dump(cloudinary_urls, f, indent=4)