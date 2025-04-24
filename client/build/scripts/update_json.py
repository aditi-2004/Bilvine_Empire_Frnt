import json

  # Load the original JSON data
with open("yogaMeditationData.json", "r") as f:
      data = json.load(f)

# Load the Cloudinary URL mapping
with open("cloudinary_url_mapping.json", "r") as f:
      cloudinary_mapping = json.load(f)

# Manual mapping from local paths to pocketyoga.com URLs
local_to_pocket_mapping = {
      "/assets/yoga-images/mountain-pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/MountainArmsSide-tn146.png",
      "/assets/yoga-images/downward-dog.jpg": "https://pocketyoga.com/assets/images/thumbnails146/DownwardDog-tn146.png",
      "/assets/yoga-images/Cobra-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/CobraFull-tn146.png",
      "/assets/yoga-images/Warrior-I.jpg": "https://pocketyoga.com/assets/images/thumbnails146/WarriorI_R-tn146.png",
      "/assets/yoga-images/Seated-Forward-Bend.jpg": "https://pocketyoga.com/assets/images/thumbnails146/SeatedForwardBend-tn146.png",
      "/assets/yoga-images/CorpsePose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/Corpse-tn146.png",
      "/assets/yoga-images/Half-Forward-Bend.jpg": "https://pocketyoga.com/assets/images/thumbnails146/ForwardBend-tn146.png",
      "/assets/yoga-images/Easy-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/Easy-tn146.png",
      "/assets/yoga-images/Supine-Spinal-Twist.jpg": "https://pocketyoga.com/assets/images/thumbnails146/SupineSpinalTwist_R-tn146.png",
      "/assets/yoga-images/Head-to-Knee-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/HeadToKnee_L-tn146.png",
      "/assets/yoga-images/Plank-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/Plank-tn146.png",
      "/assets/yoga-images/Cobbler's-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/BoundAngle-tn146.png",
      "/assets/yoga-images/Staff-Pose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/Staff-tn146.png",
      "/assets/yoga-images/HappyBabyPose.jpg": "https://pocketyoga.com/assets/images/thumbnails146/BlissfulBaby-tn146.png",
      "/assets/yoga-images/Half-ofLord.jpg": "https://pocketyoga.com/assets/images/thumbnails146/LordOfTheFishes_L-tn146.png",
      "/assets/yoga-images/SeatedWideAngleStraddle.jpg": "https://pocketyoga.com/assets/images/thumbnails146/SplitsWide-tn146.png",
      "/assets/yoga-images/Low Lunge.mp4": "https://pocketyoga.com/assets/images/thumbnails146/Lunge_R-tn146.png"
  }

# Update the image URLs
def update_images(data):
      for category in data.values():
          for plan in category.get("plan", []):
              for exercise in plan.get("exercises", []):
                  old_url = exercise.get("image")
                  if old_url in local_to_pocket_mapping:
                      pocket_url = local_to_pocket_mapping[old_url]
                      if pocket_url in cloudinary_mapping:
                          exercise["image"] = cloudinary_mapping[pocket_url]
              if "meditation" in plan:
                  old_url = plan["meditation"].get("image")
                  if old_url in local_to_pocket_mapping:
                      pocket_url = local_to_pocket_mapping[old_url]
                      if pocket_url in cloudinary_mapping:
                          plan["meditation"]["image"] = cloudinary_mapping[pocket_url]
      return data

# Apply updates
updated_data = update_images(data)

# Save the updated JSON
with open("yogaMeditationData_updated.json", "w") as f:
      json.dump(updated_data, f, indent=2)

print("Updated JSON saved to yogaMeditationData_updated.json")