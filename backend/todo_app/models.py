from django.db import models

# Create your models here.


class Todo(models.Model):
    name = models.CharField(max_length=120)
    total_tasks = models.IntegerField(default=0)
    completed_tasks = models.IntegerField(default=0)

    def _str_(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE, related_name="tasks")



