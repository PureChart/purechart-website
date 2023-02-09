FROM ruby:3.0.0

# Install nodejs on the default ruby 3 image
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
      apt-get install -y nodejs build-essential

WORKDIR /app

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN bundle install
RUN bundle config set force_ruby_platform true
RUN npm install

COPY . .

CMD ["bin/rails", "console"]