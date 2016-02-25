
def seed_image(file_name)
  File.open(File.join(Rails.root, "/app/assets/images/#{file_name}"))
end

american_flag = seed_image("unitedstatesflag.svg")
brazil_flag = seed_image("brazilflag.png")
france_flag = seed_image("franceflag.png")
spain_flag = seed_image("spainflag.png")
esperanto_flag = seed_image("esperantoflag.png")


english = Language.find_or_create_by(name: "English", abbreviation: "en")
if !english.flag
  english.flag = american_flag
  english.save!
end

french = Language.find_or_create_by(name: "French", abbreviation: "fr")
if !french.flag
  french.flag = france_flag
  french.save!
end

spanish = Language.find_or_create_by(name: "Spanish", abbreviation: "es")
if !spanish.flag
  spanish.flag = spain_flag
  spanish.save!
end

portuguese = Language.find_or_create_by(name: "Portuguese", abbreviation: "pt")
if !portuguese.flag
  portuguese.flag = brazil_flag
  portuguese.save!
end

esperanto = Language.find_or_create_by(name: "Esperanto", abbreviation: "eo")
if !esperanto.flag
  esperanto.flag = esperanto_flag
  esperanto.save!
end
