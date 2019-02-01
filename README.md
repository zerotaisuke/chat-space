# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##users

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups
- has_many :tweets
- has_many :comments


##tweets

|Column|Type|Options|
|------|----|-------|
|text|text|null: true|
|image|image|null: true|
|user_id|string|null: false|

### Association
- be_longs :user
- be_longs :groups
- has_many :comments


##comments

|Column|Type|Options|
|------|----|-------|
|text|text|null: true|
|image|image|null: true|
|tweet_id|string|null: false|
|user_id|string|null: false|

### Association
- be_longs :user
- be_longs :tweet


##groups

|Column|Type|Options|
|------|----|-------|
|user_id|string|null: false|

### Association
- has_many :user

