# chat-spaceのDB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|unique not null, add_index :users, :name|
|mail|string|unique not null|
### Association
- has_many :groups, through: :members
- has_many :messages

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name_id|integer|null:false, foreign_key: true|
### Association
- has_many :users, through: :members
- has_many :messages, through: :groups_messages

## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## Groups_messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :message

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|message_id|integer|null: false, foreign_key: true|
|message|text|null: false|
### Association
- belongs_to :group
- belongs_to :user
- has_many :groups, through: :groups_messages
