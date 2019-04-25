# chat-spaceのDB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null:false, add_index :users, :name|
|mail|string|unique not null|
### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|integer|null:false, add_index :groups, :group_name|
### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members

## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
- belongs_to :member

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|id|integer|null: false, add_index :messages, :id|
|body|text|null: false|
|image|string|null: false, add_index :messages, :image|
### Association
- belongs_to :group
- belongs_to :user
- belongs_to :member
