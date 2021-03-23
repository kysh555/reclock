## usersテーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |


### association
- has_many :plans


## plansテーブル

| Column | Type    | Options     |
| ------ | ------- | ----------- |
| todo   | string  | null: false |
| done   | boolean |             |

### assosication
- belongs_to :user