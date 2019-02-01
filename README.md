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
- has_many :messages
- has_many :members

##groups

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through members
- has_many :messages
- has_many :groups


##messages

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|image||
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :groups
