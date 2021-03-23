class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string  :todo, null: false
      t.boolean :done

      t.timestamps
    end
  end
end
