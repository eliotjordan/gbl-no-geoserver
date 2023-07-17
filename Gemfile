source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails", "~> 7.0.6"
gem "sprockets-rails"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "blacklight", "~> 7.0"
gem "geoblacklight", "~> 4.0"
gem "sprockets", "< 4.0"
gem "rsolr", ">= 1.0", "< 3"
gem "bootstrap", "~> 4.0"
gem "twitter-typeahead-rails", "0.11.1.pre.corejavascript"
gem "sassc-rails", "~> 2.1"
gem "jquery-rails"
gem "devise"
gem "devise-guests", "~> 0.8"
gem "redis", "~> 4.0"
gem "pg"

gem "bootsnap", require: false

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
end

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"
