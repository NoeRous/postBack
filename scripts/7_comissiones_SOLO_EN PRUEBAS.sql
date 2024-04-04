
----usuarios prueba 

INSERT INTO public.person (identity_card,identity_card_complement,last_name,mothers_last_name,husband_last_name,firts_name,second_name,photo_url,email,address,phone,personal_number,birth_date,created_at,created_by,updated_at,updated_by,t_part_gender_id) VALUES
	 (10069779,'','ANCARI','VILLCARANI','','NOEMI','ROSARIO',NULL,'noemiancari.na@gmail.com','tejada triangular, calle 7 nro 100','','76579661','1994-02-10 00:00:00','2023-08-04 12:34:43.301',NULL,'2023-08-04 12:34:43.301',NULL,1),
	 (123456,'1J','PEREZ','','','ANA','',NULL,'ana@gmail.com','Sopocachi','','7777777','1994-08-22 00:00:00','2023-08-22 10:23:43.679609',NULL,'2023-08-22 10:23:43.679609',NULL,1),
	 (1234567,'','APAZA','','','MIRTHA','',NULL,'mirtha@gmail.com','av rosales','','7777777','1992-02-22 00:00:00','2023-08-22 10:25:56.029392',NULL,'2023-08-22 10:25:56.029392',NULL,1),
	 (123123,'','MAMANI','','','CARMELO','',NULL,'carmelo@gmail.com','tejada triangular','','78945612','1990-02-02 00:00:00','2023-08-22 10:29:28.218953',NULL,'2023-08-22 10:29:28.218953',NULL,2),
	 (456456,'','CONDORI','','','FEDERICA','',NULL,'federica@gmail.com','av balliivian','','77778958','1996-02-02 00:00:00','2023-08-22 10:31:25.314803',NULL,'2023-08-22 10:31:25.314803',NULL,1),
	 (789789,'2P','PEREZ','','','PEPE','',NULL,'noemirousy@gmail.com','av civica','','78945617','1994-02-10 00:00:00','2023-08-22 16:06:05.131421',NULL,'2023-08-22 16:06:05.131421',NULL,2);


INSERT INTO public."user" (username,"password",created_at,updated_at,deleted_at,activation_code,activated_at,person_id) VALUES
	 ('10069779','$2b$10$9DQv7.lKLHEreBhBQwSCN.lDa0v0B7expn3tQEo/CWXLcUVMVcnka','2023-08-04 12:34:43.450','2023-08-04 12:34:43.450',NULL,'q53ptnp9tb',NULL,1),
	 ('123456-1J','$2b$10$jhQQihscc3k/7WNuEHHFaOuCnOfQEWWv325BsePW5JdAmjp7BU306','2023-08-22 10:23:44.121','2023-08-22 10:23:44.121',NULL,'hultg2n4tc',NULL,2),
	 ('1234567','$2b$10$nqMU6CeZXj9Bq0yGQiS2PeeGnZseRqYV18AhSTkMGJPBkpBaHcrKe','2023-08-22 10:25:56.108','2023-08-22 10:25:56.108',NULL,'40lzuvri6u',NULL,3),
	 ('123123','$2b$10$GMva6Rwk4MDba8c.dCj5HeQrfQDCopWDQEMhU73nhFWEAciYfTJju','2023-08-22 10:29:28.348','2023-08-22 10:29:28.348',NULL,'tnxwz93elj',NULL,4),
	 ('456456','$2b$10$oVi6Zglm01yWFbUAQCUIXO.nQ11Ahom/ac2QMq4On.bT6MfsO1R9y','2023-08-22 10:31:25.406','2023-08-22 10:31:25.406',NULL,'0xiijnevf0',NULL,5),
	 ('789789-2P','$2b$10$UtLb.almfr5U0VB3YtaZ7OzWDyfqeIw4BkzJLXThE./n6JcI4Mz5u','2023-08-22 16:06:05.131','2023-08-22 16:06:05.131',NULL,'frbo6qo628',NULL,6);


INSERT INTO public.user_role (user_id,role_id) VALUES
	 (1,6),
	 (2,2),
	 (3,3),
	 (4,4),
	 (5,5),
	 (6,1);

INSERT INTO public.applicant (rda_number,created_at,created_by,updated_at,updated_by,person_id) VALUES
	 (NULL,'2023-01-01 00:00:00','1','2023-01-01 00:00:00','1',6);

----------SEDES prueba

INSERT INTO public.commission_headquarter (name, address, created_at, created_by, updated_at, updated_by)
VALUES
    ('Sede 1', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 2', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 3', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 4', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 5', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 6', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 7', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 8', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 9', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 10', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1);


--------comisiones
INSERT INTO public.commission (created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,phase_id,commission_headquarter_id,"name","date") VALUES
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1,'Comision de fase de postulacion cargo 1 ','2023-09-01 00:00:00'),
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1,'Comision de fase de evaluacion cargo 1','2023-09-15 00:00:00'),
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1,'Comision de fase de calificador de meritos cargo 1 ','2023-09-18 00:00:00');

-----commision interna 
INSERT INTO public.commission_internal (name_role,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,person_id) VALUES
	 ('presidente','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1),
	 ('actas','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1),
	 ('vizor','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1);

	
-----comision asignacion
INSERT INTO public.commission_assigned (act_init_date,act_end_date,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,announcement_institution_position_id) VALUES
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1),
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1),
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1);

--- representante externo 

INSERT INTO public.representative (identity_card,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,personal_number,identity_card_complement,last_name,mothers_last_name,husband_last_name,firts_name,second_name) VALUES
	 (123456789,'2023-05-05 00:00:00',1,'2023-05-05 00:00:00',1,NULL,NULL,'555555',NULL,'prueba',NULL,NULL,'naomi',NULL);

-----comision externa 

INSERT INTO public.commission_external (name_role,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,representative_id,name_institution) VALUES
	 ('presidente','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,1,1,'CTEUB');

