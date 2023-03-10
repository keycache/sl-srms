# Generated by Django 4.1.5 on 2023-01-28 15:45

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("course", "0001_initial"),
        ("student", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Result",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "score",
                    models.CharField(
                        choices=[
                            ("A", "A"),
                            ("B", "B"),
                            ("C", "C"),
                            ("D", "D"),
                            ("E", "E"),
                            ("F", "F"),
                        ],
                        max_length=2,
                    ),
                ),
                (
                    "course",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="course.course",
                    ),
                ),
                (
                    "student",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="student.student",
                    ),
                ),
            ],
            options={
                "verbose_name": "Result",
                "verbose_name_plural": "Results",
                "db_table": "result",
            },
        ),
    ]
