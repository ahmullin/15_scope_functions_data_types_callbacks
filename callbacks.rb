["Ian", "Sophie", "JJ"].each do |name|
  puts name
end

["Ian", "Sophie", "JJ"].each do |name|
  puts "Hello, #{name}, how are you?"
end

def my_each(array)
  i = 0
  while i < array.length
    yield(array[i])
    i += 1
  end
end
