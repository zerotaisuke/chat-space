# README

##members
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user


##users

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups through members
- has_many :tweets
- has_many :comments


##groups

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through members
- has_many :tweets


##tweets

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|image||
|member_id|integer|null: false|

### Association
- be_longs :user
- be_longs :groups through members
- has_many :comments


##comments

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|image||
|tweet_id|integer|null: false|
|member_id|integer|null: false|

### Association
- be_longs :users through members
- be_longs :tweet
