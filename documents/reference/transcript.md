1
00:00:00,011 --> 00:00:02,839
Hey Catherine, I hope you're doing well.

2
00:00:03,035 --> 00:00:06,578
I just wanted to take a moment to record a quick demo video for

3
00:00:06,579 --> 00:00:11,550
you going over the new extracted grid functionality that we've released at Mine Seek.

4
00:00:12,215 --> 00:00:17,361
So, the main use case is trying to extract a

5
00:00:17,930 --> 00:00:22,244
set schema of information from unstructured documents,

6
00:00:22,451 --> 00:00:27,556
most notably PDF documents. So, these can be PDF documents that are available

7
00:00:27,557 --> 00:00:29,701
through various ASX announcements,

8
00:00:30,187 --> 00:00:34,843
they could be in a geological open source database such

9
00:00:34,844 --> 00:00:37,325
as Wamex, Sarig, Binview, or something like that,

10
00:00:37,565 --> 00:00:42,072
or most commonly, your own internal data that you want to extract information

11
00:00:42,073 --> 00:00:44,692
from. So, there's a couple ways that you can use this,

12
00:00:44,986 --> 00:00:49,110
but the most common use case is using a pre-built template,

13
00:00:49,407 --> 00:00:51,492
which we can either work with you to develop,

14
00:00:51,493 --> 00:00:54,974
you can use one of our pre-built templates, or you can use your own,

15
00:00:55,527 --> 00:00:57,676
ah, freeform query, which I'll get into as well,

16
00:00:57,677 --> 00:01:02,266
ah, and essentially extract information such as mineralization

17
00:01:02,267 --> 00:01:04,537
intervals, ah, color information,

18
00:01:04,538 --> 00:01:06,861
and a whole lot more. So, instead of just speaking to it,

19
00:01:06,862 --> 00:01:09,590
maybe I'll just show you. So, straight away, you can see when you go

20
00:01:09,591 --> 00:01:12,507
to build a new table, we have all of our pre-built templates here,

21
00:01:12,666 --> 00:01:15,220
which we can customize, and what I'm going to do is I'm just going

22
00:01:15,221 --> 00:01:17,806
to use a mineralization interval to start with.

23
00:01:18,125 --> 00:01:20,599
So, you can see it's letting me create a custom name.

24
00:01:20,600 --> 00:01:25,120
I'm just going to choose the default, and it's pre-populated the table with

25
00:01:25,173 --> 00:01:27,412
whole ID, project name, depth from 2.

26
00:01:28,201 --> 00:01:30,728
I'll let you read that. I won't go over all the different columns,

27
00:01:30,919 --> 00:01:35,510
but essentially, the main schema that you would want from a mineralization

28
00:01:35,511 --> 00:01:38,756
interval standpoint for a particular PDF.

29
00:01:39,001 --> 00:01:42,621
So, you can use, uh, any PDF that you've got available,

30
00:01:42,622 --> 00:01:46,774
and it will attempt to extract the information in a structured way from said

31
00:01:46,775 --> 00:01:51,689
documents, and then make it really, really easy for you to use that immediately

32
00:01:51,690 --> 00:01:56,391
for your own use case, or export that into some third-party tool such

33
00:01:56,392 --> 00:01:58,801
as LeapFrog. So,

34
00:01:58,928 --> 00:02:01,251
you can see that's already pre-populated. done for me.

35
00:02:01,394 --> 00:02:04,270
I'm just going to quickly show you what I'm about to upload.

36
00:02:04,271 --> 00:02:06,461
So, I've got three different documents,

37
00:02:06,462 --> 00:02:08,508
uh, that I'm going to upload. Uh,

38
00:02:08,519 --> 00:02:12,990
the first one here is an announcement from TrueNorthCopper,

39
00:02:13,228 --> 00:02:15,300
and you can see going through it, uh,

40
00:02:15,311 --> 00:02:20,311
they've got a bunch of mineralization interval information on pages 13

41
00:02:20,312 --> 00:02:22,577
to 15, and what I'm going to do is,

42
00:02:22,578 --> 00:02:27,193
is I'm going to upload that data, and just click that

43
00:02:27,194 --> 00:02:30,045
there. Now, uh,

44
00:02:30,056 --> 00:02:32,785
it's going to go in the background and do a bunch of work,

45
00:02:32,892 --> 00:02:34,998
so while that's actually processing,

46
00:02:34,999 --> 00:02:39,204
I'll just quickly pause the video. This is probably going to take 30 seconds

47
00:02:39,205 --> 00:02:42,189
to a couple of minutes. It depends on the length of the document,

48
00:02:42,190 --> 00:02:44,737
the complexity of the document, which I'll get to in a moment.

49
00:02:46,646 --> 00:02:50,527
Cool, so that's just finished processing. So you can see that it's been able

50
00:02:50,528 --> 00:02:53,422
to extract the whole ID, project name,

51
00:02:53,423 --> 00:02:57,727
depth from to, and all the mineralizations that were present within the data.

52
00:02:57,966 --> 00:03:00,421
If the data is not present, so you can see here it's got a

53
00:03:00,422 --> 00:03:02,547
lot of unknown fields, that is,

54
00:03:02,753 --> 00:03:07,810
by default, uhm, that is intentional to reduce hallucinations,

55
00:03:07,811 --> 00:03:10,390
so we make sure that the model knows that if the data is not

56
00:03:10,391 --> 00:03:14,042
available to actually just return all the data There are a bunch of checks

57
00:03:14,043 --> 00:03:16,882
that go on in the background to make sure we've got the right data,

58
00:03:17,098 --> 00:03:19,218
that it's in the right format, and,

59
00:03:19,219 --> 00:03:22,438
uhm, ensure that there are no hallucinations,

60
00:03:22,439 --> 00:03:25,082
uh, which I can speak to in more depth if you'd like,

61
00:03:25,083 --> 00:03:28,542
uhm, but you can see it's extracted all that information in a nice structured

62
00:03:28,543 --> 00:03:31,500
way that I can view within the extracted grid.

63
00:03:31,716 --> 00:03:34,636
Now, most commonly, like I said, you don't just want to stare at this

64
00:03:34,637 --> 00:03:37,063
data, you actually want to use this on. somehow,

65
00:03:37,091 --> 00:03:40,020
so you can actually download a CSV of that data,

66
00:03:40,021 --> 00:03:43,410
which is already ready for tools like LeapFrog.

67
00:03:43,411 --> 00:03:46,435
Uh, it is customizable depending on the tools that you're using.

68
00:03:47,209 --> 00:03:49,733
What if I just go through and save that there, and I'll open that

69
00:03:49,734 --> 00:03:51,766
up, and you can see this is the document.

70
00:03:51,975 --> 00:03:55,624
You can see it's actually pulled all of that data into the CSV and

71
00:03:55,625 --> 00:03:58,156
formatted it nicely. You've got all of your,

72
00:03:58,157 --> 00:04:00,288
uhm,

73
00:04:00,299 --> 00:04:02,642
variables, all names there, which again, we can customize,

74
00:04:02,839 --> 00:04:07,408
but this is based on what this particular use case needs to just

75
00:04:07,445 --> 00:04:10,446
be able to easily import, uh, into a particular tool.

76
00:04:10,729 --> 00:04:14,415
Customizable. So that is a mineralization interval.

77
00:04:14,416 --> 00:04:17,353
What I'll do is I'll use a different example.

78
00:04:17,354 --> 00:04:21,439
So this time we'll create a new table, and this time we'll use a

79
00:04:21,636 --> 00:04:24,475
stratigraphic interval. So we can see we've got five fields here.

80
00:04:24,476 --> 00:04:27,104
Yep. We create a new template, and again, it pre-populates it.

81
00:04:27,315 --> 00:04:30,495
This time you can see there are different schema that we're trying to extract

82
00:04:30,652 --> 00:04:33,154
by default, um, by design rather,

83
00:04:33,155 --> 00:04:36,539
because this is a stratigraphic interval.

84
00:04:36,540 --> 00:04:38,843
Uh, apologies for my terrible pronunciation.

85
00:04:39,128 --> 00:04:43,234
And what I'll do is, is this time I'll upload this document here.

86
00:04:43,235 --> 00:04:46,498
This is a big report with a bunch of pages,

87
00:04:47,061 --> 00:04:51,007
but I believe on this page, here, which I'll show you in a moment,

88
00:04:51,008 --> 00:04:54,435
uh, there is the information we care about.

89
00:04:54,436 --> 00:04:58,497
So again, I'll just pause that here for a moment while that loads in

90
00:04:58,498 --> 00:05:01,024
the background. Cool.

91
00:05:01,025 --> 00:05:03,679
So that's just finished loading. That one didn't take too long.

92
00:05:03,680 --> 00:05:06,019
It's not a big document. Um, but you can see here,

93
00:05:06,020 --> 00:05:10,710
what it's done is it's gone through this document and it's identified the pages

94
00:05:10,711 --> 00:05:12,843
that are relevant that we actually want to extract the information from.

95
00:05:12,844 --> 00:05:16,809
Uh, it's able, it's been able to identify the project name,

96
00:05:16,810 --> 00:05:18,931
whole ID, depth from, and to,

97
00:05:18,932 --> 00:05:23,025
uh, and actually just extract all that information in a really nice format for

98
00:05:23,026 --> 00:05:26,323
us. They were able to very easily see and review.

99
00:05:26,571 --> 00:05:29,225
We can easily run it again. If we think that there's some kind of

100
00:05:29,226 --> 00:05:31,405
issue, we can edit it, we can clear it,

101
00:05:31,406 --> 00:05:36,122
we can do whatever we want because we want to get this nice balance

102
00:05:36,167 --> 00:05:38,803
of being able to see and do the most work for you possible,

103
00:05:39,008 --> 00:05:42,446
but also allow a human review to actually just come in and see and

104
00:05:42,447 --> 00:05:47,243
make sure everything is correct. We have different levels of precision because

105
00:05:47,244 --> 00:05:51,050
there's a trade-off when you're doing this kind of work between latency,

106
00:05:51,051 --> 00:05:54,060
speed, cost, and precision.

107
00:05:54,383 --> 00:05:57,632
And it tries to triage and get the best possible result,

108
00:05:57,901 --> 00:06:00,976
not using the most advanced level of extensibility.

109
00:06:00,977 --> 00:06:04,638
So we unless it's necessary, but we do have ways to edit this.

110
00:06:04,639 --> 00:06:07,186
So if you're only concerned with accuracy,

111
00:06:07,400 --> 00:06:11,281
then we can always use the most advanced agentic workflows and advanced models.

112
00:06:11,537 --> 00:06:13,898
It's just going to take a little bit longer and cost a little bit

113
00:06:13,899 --> 00:06:17,571
more to process that. And again, we can very easily just download this as

114
00:06:17,572 --> 00:06:22,593
a CSV. Uh, the last example I'll show you is one that requires

115
00:06:22,828 --> 00:06:26,016
a bit of optical character recognition. So I'd be believe this is a document

116
00:06:26,017 --> 00:06:28,964
from, uh, Sarid. Yeah, I can see I've got on the file name for

117
00:06:28,965 --> 00:06:32,434
me and you can see it's got all this information that is in a

118
00:06:32,435 --> 00:06:35,227
handwritten note. So, um,

119
00:06:35,238 --> 00:06:37,680
probably I read this already, but I'll just repeat it.

120
00:06:37,681 --> 00:06:41,470
Uh, so extracting this information is a lot more complex than extracting it from

121
00:06:41,471 --> 00:06:43,784
a standard PDF because this information,

122
00:06:43,785 --> 00:06:46,737
this textual information is not actually encoded within the PDF.

123
00:06:47,024 --> 00:06:49,099
You actually need to do some additional processing.

124
00:06:48,987 --> 00:06:52,308
Processing to be able to extract this, um,

125
00:06:52,319 --> 00:06:54,494
you know, I won't say it's a doctor's handwriting,

126
00:06:54,495 --> 00:06:56,569
but it's, it's pretty close, right? So,

127
00:06:56,811 --> 00:06:59,563
again, this time I'm going to go through, I'm going to create a new

128
00:06:59,564 --> 00:07:03,126
table. I'm going to use a mineralization interval again.

129
00:07:03,400 --> 00:07:07,028
This is probably the most common one. I'm going to upload that document.

130
00:07:07,313 --> 00:07:10,742
Now, in this case, it automatically detects that we need,

131
00:07:10,743 --> 00:07:12,960
uh, OCR, Optical Character Recognition,

132
00:07:12,961 --> 00:07:15,832
because it tries to do the initial parsing and then it doesn't work.

133
00:07:16,091 --> 00:07:18,797
So it goes through this extraction. So again, I'll just pause this here for

134
00:07:18,798 --> 00:07:21,868
a moment. Cool.

135
00:07:21,869 --> 00:07:24,821
So that's all extracted. So like I was saying,

136
00:07:24,822 --> 00:07:27,412
if it detects that OCR is needed,

137
00:07:27,413 --> 00:07:30,355
it will automatically use OCR. If it doesn't need OCR,

138
00:07:30,356 --> 00:07:33,788
it won't use it. Again, we don't want to use it unless it's necessary

139
00:07:33,789 --> 00:07:36,271
for latency, speed, and cost reasons.

140
00:07:36,508 --> 00:07:40,958
Here it's detected. It's necessary, and it's extracted all of that information from that

141
00:07:40,959 --> 00:07:45,905
handwritten document. So we have no problems in the extractor grid dealing with handwritten,

142
00:07:45,906 --> 00:07:50,298
uh, messy notes. Definitely we go and use the more advanced models and,

143
00:07:50,299 --> 00:07:55,256
uh, have additional agentic checks that take place and we'll reroute

144
00:07:55,257 --> 00:07:58,532
them and redo them again, depending on the quality of the data.

145
00:07:58,623 --> 00:08:01,291
Some of this handwritten note stuff could be quite complex.

146
00:08:01,292 --> 00:08:05,129
And again, this speaks to the importance of that human in the review,

147
00:08:05,130 --> 00:08:07,778
uh, check for some of this, although again,

148
00:08:07,779 --> 00:08:12,710
if we just want to do the, have the highest level of precision possible,

149
00:08:13,370 --> 00:08:15,583
we do have a way to do this as a,

150
00:08:15,584 --> 00:08:17,711
as a batch processing, like a batch job,

151
00:08:17,891 --> 00:08:19,896
go through and do hundreds,

152
00:08:20,140 --> 00:08:22,465
thousands, or even tens of thousands of documents,

153
00:08:22,466 --> 00:08:25,083
uh, at the highest level of precision.

154
00:08:25,084 --> 00:08:28,761
Thank Again, that would cost quite a lot, but if this information is something

155
00:08:28,762 --> 00:08:31,757
you care about, and all you care about is the highest level of data

156
00:08:31,758 --> 00:08:34,822
extraction, and if you compare it to the cost of getting a human to

157
00:08:34,823 --> 00:08:37,029
review it, it's very, very,

158
00:08:37,030 --> 00:08:39,578
uh, easy to see how it could be worth the cost.

159
00:08:44,238 --> 00:08:47,458
So now I'll quickly show you what it looks like if you want to

160
00:08:47,026 --> 00:08:50,374
to extract something that is relatively,

161
00:08:50,375 --> 00:08:52,418
like, easy to medium from a document,

162
00:08:52,626 --> 00:08:55,305
or perhaps you have a question that you want to ask over a large

163
00:08:55,306 --> 00:08:58,871
number of documents, and you don't want to have to go through the back

164
00:08:58,872 --> 00:09:01,691
and forth of emailing us and making,

165
00:09:01,692 --> 00:09:04,591
uh, a template. So you can see here when I go to the column

166
00:09:04,592 --> 00:09:07,665
here, you've got the extraction mode, you've got the free form query mode,

167
00:09:07,777 --> 00:09:10,557
and you've got the structured template mode, which you've already seen with all of

168
00:09:10,558 --> 00:09:13,281
the templates. If you just want to ask an easy question,

169
00:09:13,282 --> 00:09:15,499
um, again, not necessarily just easy,

170
00:09:15,500 --> 00:09:18,073
but easy to medium or over a large number of documents,

171
00:09:18,308 --> 00:09:22,210
you can actually ask that yourself here and run that yourself without having to

172
00:09:22,211 --> 00:09:25,729
build your own template. You can even customise the answer,

173
00:09:25,730 --> 00:09:28,256
so you can do it as text, list of text,

174
00:09:28,257 --> 00:09:30,702
number, list of numbers, true, false. Uh,

175
00:09:30,713 --> 00:09:32,920
so for example, if I just want to know, uh,

176
00:09:32,931 --> 00:09:35,586
is there a table?

177
00:09:35,587 --> 00:09:40,314
And then the question is, is there a table present in this

178
00:09:40,315 --> 00:09:43,038
document? We can run that,

179
00:09:43,039 --> 00:09:47,872
save that, and then just upload a document to be able to see.

180
00:09:49,037 --> 00:09:51,451
So here, is there a table here? Again,

181
00:09:51,452 --> 00:09:54,766
there was OCR required here, so it's actually doing the OCR for us,

182
00:09:54,767 --> 00:09:57,560
uh, and then it's going to figure out, yes, there is a table in

183
00:09:57,561 --> 00:09:59,655
that document. So again, we could upload more documents.

184
00:09:59,656 --> 00:10:03,159
And ask that same question, run it on all those documents,

185
00:10:03,369 --> 00:10:05,338
and just give it, it gives you an easy way to be able to

186
00:10:05,339 --> 00:10:09,826
extract something really quickly. If you want something that's doing a large number of

187
00:10:09,827 --> 00:10:12,488
process, a large amount of processing rather,

188
00:10:12,538 --> 00:10:15,568
or a batch job, or it needs to be precise, I definitely think that

189
00:10:15,569 --> 00:10:19,070
the structured method is the way to go, but that's just another option for

190
00:10:19,071 --> 00:10:21,075
you. So very, very quickly,

191
00:10:21,076 --> 00:10:25,094
being cognizant of your time, I'll just spend another 60 seconds on some other

192
00:10:25,095 --> 00:10:27,136
cool features that you might be interested in.

193
00:10:27,253 --> 00:10:31,870
So another piece of functionality that we've received some great feedback on

194
00:10:31,871 --> 00:10:34,162
is our unified interface. So what is this?

195
00:10:34,493 --> 00:10:39,691
This essentially allows you to ask natural language based questions on open

196
00:10:39,692 --> 00:10:41,700
source databases like, again,

197
00:10:41,882 --> 00:10:44,062
Wamex, Sarig, MinVue, uhm,

198
00:10:47,468 --> 00:10:50,523
uh, the, the Queensland equivalent, uh, the name alludes me for a moment, I

199
00:10:50,524 --> 00:10:54,393
think it's Qdex, uh, or your internal data sources.

200
00:10:54,618 --> 00:10:58,621
So we can connect this in a secure way to whatever,

201
00:10:58,622 --> 00:11:02,097
uh, cloud provider you're using, so whether that's Azure,

202
00:11:02,098 --> 00:11:06,665
AWS, uh, or GCP, and we can connect all of this and allow you

203
00:11:06,666 --> 00:11:11,516
to ask questions without having to specify what the

204
00:11:11,517 --> 00:11:15,387
data source is that you're looking for, it will go through and determine based

205
00:11:15,388 --> 00:11:18,303
on your question what the right, uh,

206
00:11:18,313 --> 00:11:20,830
source is for that location, whether that be Wamex,

207
00:11:20,831 --> 00:11:22,999
Sarig, your own internal data sources,

208
00:11:23,171 --> 00:11:26,129
or even, uh, Web Search, uh,

209
00:11:26,139 --> 00:11:28,736
you can just ask that question, it will do all the hard work for

210
00:11:28,737 --> 00:11:32,142
you, uh, we've got some really cool agentic workflows in there that try and

211
00:11:32,143 --> 00:11:35,554
make it as easy as possible for you to just ask the question and

212
00:11:35,555 --> 00:11:37,810
then get the answer. Uh, very commonly,

213
00:11:37,850 --> 00:11:42,607
people use this to ask questions about Wamex data without having to write

214
00:11:42,608 --> 00:11:44,616
SQL queries. So that's a really cool use space,

215
00:11:44,617 --> 00:11:48,455
uh, use case. Uh, and the other cool use case I wanted to show

216
00:11:48,456 --> 00:11:51,099
off is this geological document search. Uh,

217
00:11:51,110 --> 00:11:53,167
so, we've got keyword, location,

218
00:11:53,168 --> 00:11:57,556
and resource search. So what is this? We have a bunch of indexed documents,

219
00:11:57,788 --> 00:12:00,631
again, we have access to the open source ones, but we can't also do

220
00:12:00,632 --> 00:12:04,533
this for your own internal documents. And from those documents,

221
00:12:04,534 --> 00:12:07,572
we create an index of,

222
00:12:07,573 --> 00:12:09,757
uh, keywords, resources,

223
00:12:09,758 --> 00:12:12,378
and locations based on that,

224
00:12:12,691 --> 00:12:16,053
the information present in the document. So it might be easier if I just

225
00:12:16,054 --> 00:12:19,326
show you. So you can see here, I've done a resource type search for

226
00:12:19,327 --> 00:12:22,710
copper, and I've got various exploration statuses that I can search for,

227
00:12:22,852 --> 00:12:26,182
and I can look for them. We'll go through and find all the documents

228
00:12:26,183 --> 00:12:28,215
that match that resource search query,

229
00:12:28,372 --> 00:12:30,901
and you can immediately see, hey, this particular document,

230
00:12:31,090 --> 00:12:34,111
there was copper, it wasn't found, this is the results,

231
00:12:34,491 --> 00:12:36,652
and, uh, you can look at a bit of a document summary, and then

232
00:12:36,653 --> 00:12:39,909
you can pull up that document very easily. So it allows you to search

233
00:12:39,910 --> 00:12:43,753
through your own internal and external data sources in a really easy,

234
00:12:43,754 --> 00:12:46,045
intuitive interface. Uh, we also have,

235
00:12:46,046 --> 00:12:49,654
if you're looking for something specific, not a resource, we can do keyword search

236
00:12:49,655 --> 00:12:53,610
as well, which, again, is really handy if it's not some pre-built template,

237
00:12:53,611 --> 00:12:56,206
uh, forgive my pronunciation,

238
00:12:56,207 --> 00:12:58,582
but if you want to look for, you know, surface materials,

239
00:12:58,799 --> 00:13:01,127
like lateritic ferrocrete, uhm,

240
00:13:01,137 --> 00:13:03,840
or structural features, like proterozoic dikes,

241
00:13:03,841 --> 00:13:06,553
you can actually just search for it through here, and it will find,

242
00:13:06,554 --> 00:13:08,579
again, all those documents for you.

243
00:13:08,580 --> 00:13:11,645
So, instead of me typing that away, I just might do a little copy-paste

244
00:13:11,646 --> 00:13:14,475
there, and we'll search for it, and it will show you all the relevant

245
00:13:14,476 --> 00:13:16,730
documents. We also have location search.

246
00:13:16,731 --> 00:13:21,331
So, if you have a particular latitude and longitude that you're looking for,

247
00:13:21,332 --> 00:13:23,453
hey, I want all of the,

248
00:13:23,454 --> 00:13:26,721
uh, information, uhm, all the documents that has occurred,

249
00:13:26,722 --> 00:13:29,276
either internally or externally, through something like Wamex,

250
00:13:29,592 --> 00:13:31,707
in this particular geological region,

251
00:13:31,852 --> 00:13:34,170
you can specify the latitude and longitude,

252
00:13:34,304 --> 00:13:37,900
and search by that location, and it will show you all of the relevant

253
00:13:37,901 --> 00:13:40,144
documents for said location,

254
00:13:40,145 --> 00:13:43,081
right? Uh, you can see here, it's got inferred.

255
00:13:43,188 --> 00:13:46,440
So, there are two ways that we actually get this information from the documents.

256
00:13:46,728 --> 00:13:50,006
The first way is if it's explicitly stated in the document.

257
00:13:50,007 --> 00:13:54,084
Sometimes, it will actually say the latitude and longitude on a particular map,

258
00:13:54,085 --> 00:13:56,270
or within the document text somewhere.

259
00:13:56,409 --> 00:14:00,929
We index that we can surface the document through the

260
00:14:00,930 --> 00:14:04,085
location that way. But, we also have an inferred way,

261
00:14:04,256 --> 00:14:06,783
which is if they've just specified a location,

262
00:14:06,784 --> 00:14:09,502
uh, you know, some particular place in the Peel Borough,

263
00:14:09,503 --> 00:14:14,145
some particular location, we can infer the latitude and longitude from that location

264
00:14:14,146 --> 00:14:16,762
as plain text, and then index the document that way.

265
00:14:17,786 --> 00:14:19,886
Anyway, I'll leave it there, Catherine. I didn't want to make this too long

266
00:14:19,887 --> 00:14:22,530
of a video. Uh, if you've got any questions for me,

267
00:14:22,648 --> 00:14:25,025
please feel free to reach out. Uh,

268
00:14:25,036 --> 00:14:28,484
either on LinkedIn or email, or we can set up a time to meet

269
00:14:28,485 --> 00:14:30,666
in person or over a Zoom call.

270
00:14:30,843 --> 00:14:33,352
Be very interested to see if this is something that's of interest to you.

271
00:14:33,891 --> 00:14:36,526
Aside from that, have a fantastic day. Thank you for your time.