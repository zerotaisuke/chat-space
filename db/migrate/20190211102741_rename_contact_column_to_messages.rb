class RenameContactColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :contact, :content
  end
end
