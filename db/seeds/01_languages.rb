
def seed_image(file_name)
  File.open(File.join(Rails.root, "/app/assets/images/#{file_name}"))
end

american_flag = seed_image("unitedstatesflag.svg")
brazil_flag = seed_image("brazilflag.png")
france_flag = seed_image("franceflag.png")
spain_flag = seed_image("spainflag.png")
esperanto_flag = seed_image("esperantoflag.png")

english = Language.create(name: "English", abbreviation: "en", flag: american_flag)
french = Language.create(name: "French", abbreviation: "fr", flag: france_flag)
spanish = Language.create(name: "Spanish", abbreviation: "es", flag: spain_flag)
portuguese = Language.create(name: "Portuguese", abbreviation: "pt", flag: brazil_flag)
esperanto = Language.create(name: "Esperanto", abbreviation: "eo", flag: esperanto_flag)
