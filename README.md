## usersテーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |


### association
- has_many :plans


## plansテーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| todo   | string | null: false |

### assosication
- belongs_to :user