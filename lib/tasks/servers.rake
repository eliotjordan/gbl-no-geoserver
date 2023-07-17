namespace :servers do
  desc "Start solr and postgres servers using lando."
  task :start do
    system("lando start")
    system("rake servers:seed")
    system("rake servers:seed RAILS_ENV=test")
  end

  task :seed do
    Rake::Task["db:create"].invoke
    Rake::Task["db:migrate"].invoke
    Rake::Task["geoblacklight:solr:seed"].invoke
  end

  desc "Stop lando solr and postgres servers."
  task :stop do
    system("lando stop")
  end
end
