from rest_framework import serializers
from .models import Todo, Task

class TaskSerializer(serializers.ModelSerializer):
        class Meta:
            model = Task
            fields = ('__all__')    

class TodoSerializer(serializers.ModelSerializer):
        class Meta:
            model = Todo
            tasks = TaskSerializer(many=True, source='todo_set', read_only=True)
            fields = ('id', 'name', 'total_tasks', 'completed_tasks', 'tasks')
            depth = 1


