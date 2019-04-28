# chat-spaceのDB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null:false, add_index :users, :name|
|mail|string|unique not null|
|password|string|null:false|
### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|text|null:false, add_index :groups, :group_name|
### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members

## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
- belongs_to :member

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text|validates :body_or_image, presence: true|
|image|string|validates :body_or_image, presence: true, add_index :messages, :image|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
