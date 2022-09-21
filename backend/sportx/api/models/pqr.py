from django.db import models

class Pqr(models.Model):
    identification = models.CharField(max_length=60)
    class TypeIdentification(models.IntegerChoices):
        CC = 0
        TI = 1
        CE = 2
    type_identification = models.SmallIntegerField(default=TypeIdentification.CC)
    names_customer = models.CharField(max_length=100, blank=False, null=False)
    last_names_customer = models.CharField(max_length=100, blank=False, null=False)
    mobile_phone = models.CharField(max_length=50, blank=True, null=False, default="")
    mobile = models.CharField(max_length=50, blank=True, null=False, default="")
    email = models.EmailField(unique=True)
    title = models.CharField(max_length=50, blank=False,  null=False)
    class TypePqr(models.IntegerChoices):
        QJ = 0 # Queja
        SG = 1 # Sugerencia
        OTHER = 2 # Otro tipo de reclamo
    description = models.CharField(max_length=100, blank=False, null=False)

    class Status(models.IntegerChoices):
        OPEN = 0
        CLOSE = 1
    status = models.SmallIntegerField(default=Status.OPEN)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Pqr"
        verbose_name_plural = "Pqrs"
    
    def __str__(self):
        return f"Pqr: {self.names_customer} -  title: {self.title} - status: {self.status}"

