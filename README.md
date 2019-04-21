# chat-spaceのDB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|unique not null, add_index :users, :name|
|mail|string|unique not null|


### Association
has_many :groups, through: :members
has_many :messages
## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name_id|integer|null:false, foreign_key: true|
### Association

has_many :users, through: :members
has_many :messages, through: :groups_messages
## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
belongs_to :group
belongs_to :user




## Groups_messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :message
## messagesテーブル

|Column|Type|Option|
|------|----|------|
|message_id|integer|null: false, foreign_key: true|
|message|text|null: false|


### Association
belongs_to :group
belongs_to :user
has_many :groups, through: :groups_messages


## MessageDatasテーブル
|Column|Type|Option|
|------|----|------|
|MassageDatas_id|integer|null: false, foreign_key: true|


### Association
belongs_to :user
belongs_to :message




参考：
[【Rails】中間テーブルの組み方]https://qiita.com/morikuma709/items/1e389ddcdfc1102ef3f4
[【初心者・独学者向け】Ruby on Railsで中間テーブルを作成し、多対多を実現する]https://programming-beginner-zeroichi.jp/articles/25



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version gem 'rails', '~> 5.0.7', '>= 5.0.7.2'

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
